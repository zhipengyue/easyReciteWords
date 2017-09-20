import { NgModule } from '@angular/core';
import { ReciteWordsInLabelPage} from './reciteWordsInLabel';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ReciteWordsInLabelPage],
  imports: [IonicPageModule.forChild(ReciteWordsInLabelPage)],
  entryComponents: [ReciteWordsInLabelPage]
})
export class ReciteWordsModule { }
