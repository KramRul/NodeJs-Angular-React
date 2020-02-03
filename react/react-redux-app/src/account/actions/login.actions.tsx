import { AccountService } from "../../shared/services/account.service";
import { TokenHelper } from "../../shared/helpers/token.helper";
import { UserHelper } from "../../shared/helpers/user.helper";
import { LoginAccountRequestView } from "../../shared/entities/account.views/requests/login-account.request.view";
import { UserDto } from "../../shared/dtos/users/user-dto";

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export type LoginActionType = {
    type: 'LOGIN_REQUEST'
    | 'LOGIN_SUCCESS'
    | 'LOGIN_FAIL'
    payload: any
}

let accountService: AccountService = new AccountService();
let tokenHelper: TokenHelper = new TokenHelper();
let userHelper: UserHelper = new UserHelper();
let responseModel = {};

export function login(modelRequest: LoginAccountRequestView) {
    return async (dispatch: any) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: null,
        })

        try {
            let result = await accountService.login(modelRequest);
            if (result && result.token) {
                let model = new UserDto();
                model._id = result.user._id;
                model.name = result.user.name;
                model.address = result.user.address;
                model.telephone = result.user.telephone;
                model.role = Number.parseInt(result.user.role);
                tokenHelper.setToken(result.token);
                userHelper.setCurrentUser(model);
                tokenHelper.getTokenEmitter().emit(result.token);
                //props.history.push("/shop-client/list-products-page");
            } else {
                //this.props.history.push("/account/access-denied-page");
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: responseModel,
            })

        } catch (e) {
            dispatch({
                type: LOGIN_FAIL,
                error: true,
                payload: new Error(e),
            })
        }
    }
}