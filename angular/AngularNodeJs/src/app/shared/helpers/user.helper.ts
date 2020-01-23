import { Injectable } from "@angular/core";
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageKeyTypeDto } from '../dtos/enums/local-storage-key-type-dto';
import { UserDto } from '../dtos/users/user-dto';

@Injectable()
export class UserHelper {
    constructor(
        private localStorageService: LocalStorageService,
        private localStorageKeyTypeDto: LocalStorageKeyTypeDto
    ) { }

    setCurrentUser(user: UserDto) {
        this.localStorageService.set(this.localStorageKeyTypeDto.userKey, user);
    }

    getCurrentUser() {
        return this.localStorageService.get<UserDto>(this.localStorageKeyTypeDto.userKey);
    }

    clearCurrentUser() {
        this.localStorageService.remove(this.localStorageKeyTypeDto.userKey);
    }
}