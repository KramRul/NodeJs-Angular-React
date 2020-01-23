import { Injectable, Output, EventEmitter } from "@angular/core";
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageKeyTypeDto } from '../dtos/enums/local-storage-key-type-dto';

@Injectable()
export class TokenHelper {
    @Output() tokenOutputEmit: EventEmitter<any> = new EventEmitter<any>();

    private token: string;
    constructor(
        private localStorageService: LocalStorageService,
        private localStorageKeyTypeDto: LocalStorageKeyTypeDto
    ) { }

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
    }

    public removeToken(): void {
        this.localStorageService.clear();
    }

    public getTokenEmitter(): EventEmitter<any> {
        return this.tokenOutputEmit;
    }
}