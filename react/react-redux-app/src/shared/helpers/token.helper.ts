import { EventEmitter } from "../events/event-emitter";
import { LocalStorageService } from "../services/local-storage.service";
import { LocalStorageKeyTypeDto } from "../dtos/enums/local-storage-key-type-dto";

export class TokenHelper {
    private tokenOutputEmit: EventEmitter = new EventEmitter();
    private token: string = '';
    
    private localStorageService: LocalStorageService = new LocalStorageService();
    private localStorageKeyTypeDto: LocalStorageKeyTypeDto = new LocalStorageKeyTypeDto();

    public isExist(): boolean {
        this.token = this.getTokenFromLocalStorage();
        if (this.token) {
            return true;
        }
        return false;
    }

    public getToken(): string {
        if (!this.isExist()) {
            return "";
        }
        return this.token;
    }

    public setToken(token: string): boolean {
        if (token) {
            this.localStorageService.clear();
            this.localStorageService.set(this.localStorageKeyTypeDto.tokenKey, token);
        }
        return false;
    }

    private getTokenFromLocalStorage(): string {
        let token = this.localStorageService.get<string>(this.localStorageKeyTypeDto.tokenKey);
        if (token) {
            return token;
        }
        return '';
    }

    public removeToken(): void {
        this.localStorageService.clear();
    }

    public getTokenEmitter(): EventEmitter {
        return this.tokenOutputEmit;
    }
}