import { Component, input } from '@angular/core'
import { Prompt } from '../prompt.model'
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-prompt-card',
  standalone:true,
  imports: [ButtonModule,CardModule,TagModule,TextareaModule],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {

  prompt = input.required<Prompt>()

  copyToClipboard(){
    void navigator.clipboard.writeText(this.prompt().content) ;
  }


}
