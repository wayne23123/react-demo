import { type MouseEvent } from 'react';

const Calculator = () => {
  const onClickHandler = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName === 'LI') {
      console.log('你點了：', target.innerText);
    }
  };

  return (
    <>
      <div className="text-2xl bg-gray-800 p-4 w-80 mx-auto rounded-lg py-8">
        <div className="h-12 pb-1 overflow-y-auto">Calc line</div>
        <div className="font-bold text-right px-4">Result</div>
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
