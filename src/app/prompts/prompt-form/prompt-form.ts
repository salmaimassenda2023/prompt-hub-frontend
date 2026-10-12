import { Component, inject } from '@angular/core'
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { CategoryService } from '../category-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { PromptService } from '../prompt-service';


@Component({
  selector: 'app-prompt-form',
  standalone:true,
  imports: [CardModule,SelectModule,ReactiveFormsModule,ButtonModule],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {

      router = inject(Router);

      categoryService = inject(CategoryService);
      promptService = inject(PromptService);

      categories = toSignal(this.categoryService.getCategories(),{initialValue:[]});

      promptForm = new FormGroup({
        title: new FormControl('',{nonNullable:true}),
        content: new FormControl('',{nonNullable:true}),
        categoryId: new FormControl(-1,{nonNullable:true}),
      })

      onSubmit(){
        console.log(this.promptForm.value);
        const prompt=this.promptForm.getRawValue();
        this.promptService.createPrompt(prompt).subscribe( ()=> this.router.navigate(['/']) )
      }

      onReset(){  this.promptForm.reset()  }

}
