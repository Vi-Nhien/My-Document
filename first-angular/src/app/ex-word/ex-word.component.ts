import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-word',
  templateUrl: './ex-word.component.html',
  styleUrls: ['./ex-word.component.css']
})
export class ExWordComponent implements OnInit {

  newEng = "";
  newVn = "";
  fillter = 'xem-tat-ca';

  addNewWord(){
    this.arrWords.push({
      id : this.arrWords.length + 1,
      en : this.newEng,
      vn : this.newVn,
      memorized: false,

    });

    this.newEng = '';
    this.newVn = '';
  }


    removeWord(id: number){
      const index = this.arrWords.findIndex(word => word.id === id);
      this.arrWords.splice(index, 1)
    }

    showStatus(memorized: boolean){
        const sa = this.fillter === 'xem-tat-ca';
        const rw = this.fillter === 'xem-tu-da-thuoc' && memorized;
        const urw = this.fillter === 'xem-tu-chua-thuoc' && !memorized;
        return sa || rw || urw;
    }




  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
