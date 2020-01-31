import { UserRoleTypeDto } from '../enums/user-role-type-dto';

export class UserDto {
    public _id: string;
    public name: string;
    public address: string;
    public telephone: string;
    public role: UserRoleTypeDto
}