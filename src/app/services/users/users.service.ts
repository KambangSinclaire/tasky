import { Injectable } from '@angular/core';
import { IUser } from 'src/app/Interfaces/user.interface';
import { LocalStoreService } from '../store/local-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Deps injection
  constructor(private storeService: LocalStoreService) { }

  login(userData: Omit<IUser, 'username'>) {
    // 1) Check if user exists in our database(localStore)
    const response = this.storeService.get('users');
    let userInfo;
    if (response.status && response.data) {
      userInfo = response.data.find((user: any) => userData.email == user.email);
    }

    // 2) Return the user info
    // 3) If user does not exists, return a false
    if (userInfo) {
      return userInfo
    }
    return false;
  }

  register(userData: IUser) {
    const response = this.storeService.set('users', userData);
    if (response) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  }
}
