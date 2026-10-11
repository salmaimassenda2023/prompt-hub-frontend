import { inject, Injectable } from '@angular/core'
import { Prompt } from './prompt.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PromptService {

  httpClient = inject(HttpClient);

  getPrompts(){
   
    return this.httpClient.get<Prompt[]>('http://localhost:3000/prompts')
    
  }
}
