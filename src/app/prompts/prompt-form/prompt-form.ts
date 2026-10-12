import { Component, inject } from '@angular/core'
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { CategoryService } from '../category-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-prompt-form',
  standalone:true,
  imports: [CardModule,SelectModule,ReactiveFormsModule,ButtonModule],
  templateUrl: './prompt-form.html',
  styleUrl: './prompt-form.scss',
})
export class PromptForm {

      categoryService = inject(CategoryService);

      categories = toSignal(this.categoryService.getCategories(),{initialValue:[]});

      promptForm = new FormGroup({
        title: new FormControl(''),
        content: new FormControl(''),
        categoryId: new FormControl(-1),
      })

      onSubmit(){
        console.log(this.promptForm.value);
      }

      onReset(){  this.promptForm.reset()  }

}
