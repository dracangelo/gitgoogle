import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitgoogleService {

  private username: string;
  private clientid ='4d67a8a6fb4d9c51e4db';
  private clientsecret = '02cf0fbc1c0991fd1d60a5a1e790751a93cf6e6a';
  constructor(private http:HttpClient) { }
}
