import { NgModule } from '@angular/core';
import { ReciteWordsPage} from './reciteWords';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ReciteWordsPage],
  imports: [IonicPageModule.forChild(ReciteWordsPage)],
  entryComponents: [ReciteWordsPage]
})
export class ReciteWordsModule { }
