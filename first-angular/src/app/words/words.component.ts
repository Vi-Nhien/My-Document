import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  newEng = '';
  newVn = '';
  showFroms = false;
  fillterWord = 'seeAll';


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

  addWord() {
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEng,
      vn: this.newVn,
      memorized: false
    });
    this.newEng = '';
    this.newVn = '';
    this.showFroms = false;
  }

  removeWord(id: number) {
    // word nào có thuộc tính id bằng với id truyền vào
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1)
  }

  showStatusWord(memorized: boolean) {
    const sa = this.fillterWord === 'seeAll';
    const rw = this.fillterWord === 'remmenberWord' && memorized;
    const urw = this.fillterWord === 'unremmenberingWord' && !memorized;
    return sa || rw || urw;
  }

}
