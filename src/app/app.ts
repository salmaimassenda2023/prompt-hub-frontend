import { Component } from '@angular/core'
import {PromptList} from './prompts/prompt-list/prompt-list';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports:[PromptList]
})
export class App {}
