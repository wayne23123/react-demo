import { useState, useRef, type MouseEvent } from 'react';

const Calculator = () => {
  const [list, setList] = useState<string[]>(['0']);

  // 特性	            useState	          useRef
  // 是否會re-render	是（會更新畫面）	   否（只記住值）
  // 用途	            儲存會影響 UI 的值	儲存不影響 UI 的暫存資料或 DOM 元素參照
  // 寫法	            [value, setValue]	 ref.current
  const result = useRef<string>('0');

  const getType = (operation: string) => {
    return isNaN(parseInt(operation)) ? 'operator' : 'number';
  };

  const onClickHandler = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName === 'LI') {
      // console.log('你點了：', target.innerText);

      const className = target.className;
      console.log('你點了：', className);

      let lastOperation = list[list.length - 1];

      if (className == '') {
        // 計算機數字按鈕
        if (getType(lastOperation) == 'number') {
          if (lastOperation == '0') {
            lastOperation = '';
          }

          // 接上 number
          list[list.length - 1] = lastOperation + target.innerText;
        } else {
          list.push(target.innerText);
        }
      } else if (className == 'operator') {
        // 右邊加減乘除操作按鈕
        if (getType(lastOperation) == 'operator') {
          // ! 是 TypeScript 的「非空斷言」（即告訴 TS：「我保證這個值不是 null 或 undefined」）
          list[list.length - 1] = target.dataset.operator!;
        } else {
          list.push(target.dataset.operator!);
        }
      } else if (className == 'clear') {
        // 清除按鈕
        list.splice(0);
        list.push('0');
      } else {
        if (getType(lastOperation) == 'operator') {
          list.push('0.');
        } else if (lastOperation.indexOf('.') < 0) {
          list[list.length - 1] = lastOperation + '.';
        }
      }

      try {
        // 執行運算邏輯，用 eval 來計算 list 陣列組成的運算式，例如 ['3', '+', '5'] → eval('3 + 5') → '8'
        const expression = list.join(' ');
        const computed = eval(expression);
        result.current = computed.toString();
      } catch (error) {
        console.error('計算失敗:', error);
        result.current = 'NaN';
      }
      setList([...list]);
      console.log('list:', list);
    }
  };

  return (
    <>
      <div className="text-2xl bg-gray-800 p-4 w-80 mx-auto rounded-lg py-8">
        <div className="h-12 pb-1 overflow-y-auto">{list.join(' ')}</div>
        <div className="font-bold text-right px-4">{result.current}</div>
        <div className="cursor-pointer mt-4">
          <ul
            className="numpad flex flex-wrap gap-2"
            onClick={(event) => onClickHandler(event)}
          >
            <li>7</li>
            <li>8</li>
            <li>9</li>

            <li className="operator" data-operator="/">
              &#247;
            </li>

            <li>4</li>
            <li>5</li>
            <li>6</li>

            <li className="operator" data-operator="*">
              &#215;
            </li>

            <li>1</li>
            <li>2</li>
            <li>3</li>

            <li className="operator" data-operator="-">
              &#8722;
            </li>

            <li>0</li>
            <li className="clear">AC</li>
            <li className="decimal">.</li>

            <li className="operator" data-operator="+">
              &#43;
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calculator;
