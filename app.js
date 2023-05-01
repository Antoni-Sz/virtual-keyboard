// массив с раскладками клавиатуры en ru
"use strict";

const ENGrow1 = [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'],
                ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'backspace'];
const ENGrow2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', ['[', '{'], [']', '}'], ['\\', '|']];
const ENGrow3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', [';', ':'], ['\'', '"'], 'enter'];
const ENGrow4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', [',', '<'], ['.', '>'], ['/', '?'], '↑', 'Shift'];
const row5 = ['Ctrl', 'Win', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '←', '↓', '→'];

const RUSrow1 = ['Ё', ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'],
                ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], 'backspace'];
const RUSrow2 = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', ['\\', '/']];
const RUSrow3 = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'];
const RUSrow4 = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ['.', ','], '↑;', 'Shift'];

//KeysAll содержит информацию о клавишах на клавиатуре и соответствующие им символы
const KeysAll = {

    Backquote: ['`', '~', 'ё', 'Ё'],
    Digit1: ['1', '!', '1', '!'],
    Digit2: ['2', '@', '2', '"'],
    Digit3: ['3', '#', '3', '№'],
    Digit4: ['4', '$', '4', ';'],
    Digit5: ['5', '%', '5', '%'],
    Digit6: ['6', '^', '6', ':'],
    Digit7: ['7', '&', '7', '?'],
    Digit8: ['8', '*', '8', '*'],
    Digit9: ['9', '(', '9', '('],
    Digit0: ['0', ')', '0', ')'],
    Minus: ['-', '_', '-', '_'],
    Equally: ['=', '+', '=', '+'],
    backspace: ['backspace', 'ctrlButton'],

    Tab: ['    ', '    ', '    ', '    '],
    KeyQ: ['q', 'Q', 'й', 'Й'],
    KeyW: ['w', 'W', 'ц', 'Ц'],
    KeyE: ['e', 'E', 'у', 'У'],
    KeyR: ['r', 'R', 'к', 'К'],
    KeyT: ['t', 'T', 'е', 'Е'],
    KeyY: ['y', 'Y', 'н', 'Н'],
    KeyU: ['u', 'U', 'г', 'Г'],
    KeyI: ['i', 'I', 'ш', 'Ш'],
    KeyO: ['o', 'O', 'щ', 'Щ'],
    KeyP: ['p', 'P', 'з', 'З'],
    BracketLeft: ['[', '{', 'х', 'Х'],
    BracketRight: [']', '}', 'ъ', 'Ъ'],
    Backslash: ['\\', '|', '\\', '/'],

    CapsLock: ['CapsLock', 'ctrlButton'],
    KeyA: ['a', 'A', 'ф', 'Ф'],
    KeyS: ['s', 'S', 'ы', 'Ы'],
    KeyD: ['d', 'D', 'в', 'В'],
    KeyF: ['f', 'F', 'а', 'А'],
    KeyG: ['g', 'G', 'п', 'П'],
    KeyH: ['h', 'H', 'р', 'Р'],
    KeyJ: ['j', 'J', 'о', 'О'],
    KeyK: ['k', 'K', 'л', 'Л'],
    KeyL: ['l', 'L', 'д', 'Д'],
    Semicolon: [';', ':', 'ж', 'Ж'],
    Quote: ['\'', '"', 'э', 'Э'],
    Enter: ['<br />', 'ctrlButton'],

    ShiftLeft: ['Shift', 'ctrlButton'],
    KeyZ: ['z', 'Z', 'я', 'Я'],
    KeyX: ['x', 'X', 'ч', 'Ч'],
    KeyC: ['c', 'C', 'с', 'С'],
    KeyV: ['v', 'V', 'м', 'М'],
    KeyB: ['b', 'B', 'и', 'И'],
    KeyN: ['n', 'N', 'т', 'Т'],
    KeyM: ['m', 'M', 'ь', 'Ь'],
    Comma: [',', '<', 'б', 'Б'],
    Period: ['.', '>', 'ю', 'Ю'],
    Slash: ['/', '?', '.', ','],
    ArrowUp: ['↑;', 'ctrlButton'],
    ShiftRight: ['Shift', 'ctrlButton'],

    ControlLeft: ['Control', 'ctrlButton'],
    WindowsLeft: ['Windows', 'ctrlButton'],
    AltLeft: ['Alt', 'ctrlButton'],
    Space: [' ', ' ', ' ', ' '],
    AltRight: ['Alt', 'ctrlButton'],
    ControlRight: ['Control', 'ctrlButton'],
    ArrowLeft: ['←', 'ctrlButton'],
    ArrowDown: ['↓', 'ctrlButton'],
    ArrowRight: ['→', 'ctrlButton'],
  };

   const codesArray = Object.keys(KeysAll);

   //
const buttonsWidth = [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 90,
                     90, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
                     100, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 100,150,
                     55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55,55, 55,
                     55, 405, 55, 55, 55, 55, 55];

class Keyboard {
  constructor() {
    this.inputWindow = document.createElement('div');
    this.printedText = document.createElement('textarea');
    this.currentLanguage = document.createElement('div');
    this.KeyboardWindow = document.createElement('div');
    this.information = document.createElement('div');
    this.button = document.createElement('div');
    this.language = '';
    this.CapsLockStatus = false;
    this.shiftStatus = false;
    }

createMain() {
    document.body.append(this.inputWindow);
    this.inputWindow.classList.add('inputWindow');
    this.inputWindow.append(this.printedText);
    this.printedText.classList.add('printedText');
    document.body.append(this.KeyboardWindow);
    this.KeyboardWindow.className = 'keyboard';
    document.body.append(this.information);
    this.information.classList.add('information');
    this.information.innerHTML = 'Для переключения языка комбинация: левыe Shift + Control. <br /> Клавиатура создана в операционной системе Windows <br /> ';
}
createButtons() {
    for (let i = 0; i < buttonsWidth.length; i += 1) {
      const button = document.createElement('div');
      button.classList.add('button');
      button.setAttribute('id', codesArray[i]);
      button.style.width = `${buttonsWidth[i]}px`;
      this.KeyboardWindow.append(button);
    }
  }

  addButtonText() {
    const allButtons = this.KeyboardWindow.querySelectorAll('.button');

    for (let x = 0; x < this.keys.length; x += 1) {
      const button = allButtons[x];
      if (Array.isArray(this.keys[x])) {
        button.classList.add('doubleButton');
        const noShiftText = document.createElement('div');
        const shiftText = document.createElement('div');
        shiftText.classList.add('shiftText');
        noShiftText.classList.add('noShiftText');
        button.append(shiftText);
        button.append(noShiftText);
        const [a, b] = this.keys[x];
        shiftText.innerHTML = b;
        noShiftText.innerHTML = a;
      } else {
        button.innerHTML = this.keys[x];
      }
    }
  }
  addListeners() {
    document.addEventListener('keydown', (event) => this.KeyDown(event));
    document.addEventListener('keyup', (event) => this.KeyUp(event));
    document.addEventListener('mousedown', (event) => this.MouseDown(event));
  }
  KeyDown(event) {
    event.preventDefault();
    if (!codesArray.includes(event.code)) { return; }
    this.printedText.focus();

    const pressedKey = document.getElementById(`${event.code}`);
    const activeKey = KeysAll[event.code];

    if (activeKey[0] === 'CapsLock') {
      if (pressedKey.classList.contains('active')) {
        pressedKey.classList.remove('active');
      } else {
        pressedKey.classList.add('active');
      }
    } else {
      pressedKey.classList.add('active');
    }

    if (document.getElementById('ShiftLeft').classList.contains('active') && document.getElementById('ControlLeft').classList.contains('active')) {
      this.changeLanguage();
      return;
    }

    if (event.code.match(/(Arrow).*/)) {
      this.printedText.value += document.getElementById(`${event.code}`).innerHTML;
    }

    if (this.language === 'EN' && activeKey[1] !== 'ctrlButton') {
      if (!this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[0];
      } else if (this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[1];
      } else if (!this.shiftStatus && this.CapsLockStatus) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/) && event.code !== 'Backquote') {
          this.printedText.value += activeKey[1];
        } else {
          this.printedText.value += activeKey[0];
        }
      } else if (this.shiftStatus && this.CapsLockStatus) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/) && event.code !== 'Backquote') {
          this.printedText.value += activeKey[0];
        } else {
          this.printedText.value += activeKey[1];
        }
      }
    } else if (this.language === 'RU' && activeKey[1] !== 'ctrlButton') {
      if (!this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[2];
      } else if (this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[3];
      } else if (!this.shiftStatus && this.CapsLockStatus) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/)) {
          this.printedText.value += activeKey[3];
        } else {
          this.printedText.value += activeKey[2];
        }
      } else if (this.shiftStatus && this.CapsLockStatus) {
        if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/)) {
          this.printedText.value += activeKey[2];
        } else {
          this.printedText.value += activeKey[3];
        }
      }
    } else if (event.code === 'CapsLock') {
      if (this.CapsLockStatus) {
        this.CapsLockStatus = false;
      } else {
        this.CapsLockStatus = true;
      }
    } else if (activeKey[0] === 'Shift') {
      this.shiftStatus = true;
    } else if (event.code === 'backspace') {
      this.printedText.value = this.printedText.value.slice(0, -1);
    } else if (event.code === 'Enter') {
      this.printedText.setRangeText('\n', this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
    }
  }
  KeyUp(event) {
    event.preventDefault();
    const activeKey = KeysAll[event.code];

    if (!codesArray.includes(event.code)) { return; }

    if (activeKey[0] === 'Shift') {
      this.shiftStatus = false;
    }
    if (activeKey[0] !== 'CapsLock') {
      document.getElementById(`${event.code}`).classList.remove('active');
    }
  }
  MouseDown(event) {
    const ShiftLeft = document.getElementById('ShiftLeft');
    const ShiftRight = document.getElementById('ShiftRight');
    const activeKey = KeysAll[event.target.id];

    if (!event.target.classList.contains('button') && !event.target.parentNode.classList.contains('button')) { return; }

    if (event.target.id === 'CapsLock') {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
      } else {
        event.target.classList.add('active');
      }
    } else {
      event.target.classList.add('active');
      event.target.parentNode.classList.add('active');
    }

    if (event.target.id === 'ControlLeft' && document.getElementById('ShiftLeft').classList.contains('active')) {
      document.getElementById('ShiftLeft').classList.remove('active');
      this.shiftStatus = false;
      this.changeLanguage();
      return;
    }

    if (event.target.parentNode.classList.contains('doubleButton') && !this.shiftStatus) {
      this.printedText.value += KeysAll[event.target.parentNode.id][0];
    } else if (event.target.parentNode.classList.contains('doubleButton') && this.shiftStatus) {
      this.printedText.value += KeysAll[event.target.parentNode.id][1];

      this.shiftStatus = false;
      ShiftLeft.classList.remove('active');
      ShiftRight.classList.remove('active');
    } else if (this.language === 'EN' && activeKey[1] !== 'ctrlButton') {
      if (!this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[0];
      } else if (this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[1];
        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      } else if (!this.shiftStatus && this.CapsLockStatus) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += activeKey[1];
        } else {
          this.printedText.value += activeKey[0];
        }
      } else if (this.shiftStatus && this.CapsLockStatus) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += activeKey[0];
        } else {
          this.printedText.value += activeKey[1];
        }

        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      }
    } else if (this.language === 'RU' && activeKey[1] !== 'ctrlButton') {
      if (!this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[2];
      } else if (this.shiftStatus && !this.CapsLockStatus) {
        this.printedText.value += activeKey[3];

        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      } else if (!this.shiftStatus && this.CapsLockStatus) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += activeKey[3];
        } else {
          this.printedText.value += activeKey[2];
        }
      } else if (this.shiftStatus && this.CapsLockStatus) {
        if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
          this.printedText.value += activeKey[2];
          this.shiftStatus = false;
          ShiftLeft.classList.remove('active');
          ShiftRight.classList.remove('active');
        } else {
          this.printedText.value += activeKey[3];
          this.shiftStatus = false;
          ShiftLeft.classList.remove('active');
          ShiftRight.classList.remove('active');
        }
      }
    } else if (event.target.id === 'CapsLock') {
      if (this.CapsLockStatus) {
        this.CapsLockStatus = false;
      } else {
        this.CapsLockStatus = true;
      }
    } else if (activeKey[0] === 'Shift') {
      if (this.shiftStatus) {
        this.shiftStatus = false;
        ShiftLeft.classList.remove('active');
        ShiftRight.classList.remove('active');
      } else {
        this.shiftStatus = true;
      }
    } else if (event.target.id === 'backspace') {
      this.printedText.value = this.printedText.value.slice(0, -1);
    } else if (event.target.id === 'Enter') {
      this.printedText.setRangeText('\n', this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
    } else if (event.target.id.match(/(Arrow).*/)) {
      this.printedText.value += event.target.innerHTML;
    }
  }

}

const NewKeyboard = new Keyboard();

NewKeyboard.createMain();
NewKeyboard.createButtons();
NewKeyboard.addButtonText();
NewKeyboard.addListeners();

