import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core'
import { environment } from '../../environments/environment.development';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category } from './category.model';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  httpClient = inject(HttpClient);
  baseUrl = environment.apiUrl+'categories'

  getCategories(){
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

}
