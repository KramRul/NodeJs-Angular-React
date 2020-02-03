import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageKeyTypeDto } from '../dtos/enums/local-storage-key-type-dto';
import { UserDto } from '../dtos/users/user-dto';

export class UserHelper {
    private localStorageService: LocalStorageService = new LocalStorageService();
    private localStorageKeyTypeDto: LocalStorageKeyTypeDto = new LocalStorageKeyTypeDto();

    setCurrentUser(user: UserDto) {
        this.localStorageService.set(this.localStorageKeyTypeDto.userKey, user);
    }

    getCurrentUser() {
        return this.localStorageService.get<UserDto>(this.localStorageKeyTypeDto.userKey);
    }

    clearCurrentUser() {
        this.localStorageService.remove(this.localStorageKeyTypeDto.userKey);
    }

    getCurrentUserRole() {
        let user = this.getCurrentUser();
        return user.role;
    }
}