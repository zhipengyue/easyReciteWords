import { NgModule } from '@angular/core';
import { ReciteWordsSettingPage} from './reciteWordsSetting';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ReciteWordsSettingPage],
  imports: [IonicPageModule.forChild(ReciteWordsSettingPage)],
  entryComponents: [ReciteWordsSettingPage]
})
export class ReciteWordsModule { }
