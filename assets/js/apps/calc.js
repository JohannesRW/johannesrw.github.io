$$.Apps.src.calc = class {
	previous='';
	current='';
	operator='';
	options={
		appname:'calc',
		icon:'fa-duotone fa-calculator-simple',
		windowIcon:false,
		title:'Calculator',
		version:'0.0.1',
		status:false,
		resizable:false,
		width:{current:320},
		height:{current:460},
		hasLeft: false,
		hasRight: false
	}
	elements={
		history:{
			el:$('<history/>')
		},
		display:{
			el:$('<display/>')
		},
		mem:{
			el:$('<mem/>',{html:'<i>MC</i><i>MR</i><i>M+</i><i>M-</i><i>MS</i><i>M</i>'})
		},
		buttons:{
			el:$('<buttons/>'),
			percent:{el:$('<button/>',{html:'%'})},
			ce:{el:$('<button/>',{html:'CE'})},
			c:{el:$('<button/>',{html:'C'})},
			back:{el:$('<button/>',{html:'&#8592;'})},
			divideBy:{el:$('<button/>',{html:'1/x'})},
			square:{el:$('<button/>',{html:'x²'})},
			squareRoot:{el:$('<button/>',{html:'²&radic;x'})},
			divide:{el:$('<button/>',{html:'&divide;'})},
			_7:{el:$('<button/>',{html:'7',type:'digit'})},
			_8:{el:$('<button/>',{html:'8',type:'digit'})},
			_9:{el:$('<button/>',{html:'9',type:'digit'})},
			times:{el:$('<button/>',{html:'&times;'})},
			_4:{el:$('<button/>',{html:'4',type:'digit'})},
			_5:{el:$('<button/>',{html:'5',type:'digit'})},
			_6:{el:$('<button/>',{html:'6',type:'digit'})},
			minus:{el:$('<button/>',{html:'-'})},
			_1:{el:$('<button/>',{html:'1',type:'digit'})},
			_2:{el:$('<button/>',{html:'2',type:'digit'})},
			_3:{el:$('<button/>',{html:'3',type:'digit'})},
			plus:{el:$('<button/>',{html:'+'})},
			plusminus:{el:$('<button/>',{html:'&plusmn;',type:'digit'})},
			_0:{el:$('<button/>',{html:'0',type:'digit'})},
			decimal:{el:$('<button/>',{html:',',type:'digit'})},
			equals:{el:$('<button/>',{html:'='})}
		}
	};
	constructor(options={}) {
		let app = this;
		$.extend(true,app.options, options);
		app.win = new $$.Window(app.options);
		$$.Apps.addCSS('calc');
		app.setContent();
		app.listen();
	}
	setContent(){
		let app = this;
		$$.Tools.autoAppend(app.elements,app.win.elements.content.center.el);
	}
	listen(){
		let app = this;
		app.elements.buttons._0.el.on('click',function(){app.current += '0';app.update();});
		app.elements.buttons._1.el.on('click',function(){app.current += '1';app.update();});
		app.elements.buttons._2.el.on('click',function(){app.current += '2';app.update();});
		app.elements.buttons._3.el.on('click',function(){app.current += '3';app.update();});
		app.elements.buttons._4.el.on('click',function(){app.current += '4';app.update();});
		app.elements.buttons._5.el.on('click',function(){app.current += '5';app.update();});
		app.elements.buttons._6.el.on('click',function(){app.current += '6';app.update();});
		app.elements.buttons._7.el.on('click',function(){app.current += '7';app.update();});
		app.elements.buttons._8.el.on('click',function(){app.current += '8';app.update();});
		app.elements.buttons._9.el.on('click',function(){app.current += '9';app.update();});
		//operators
		app.elements.buttons.percent.el.on('click',function(){app.current = app.current/100;app.update();});
		app.elements.buttons.decimal.el.on('click',function(){app.current += '.';app.update();});
		app.elements.buttons.plusminus.el.on('click',function(){app.current = app.current*-1;app.update();});
		app.elements.buttons.ce.el.on('click',function(){app.current = '';app.update();});
		app.elements.buttons.c.el.on('click',function(){app.previous='';app.current = '';app.operator='';app.update();app.updateHistory()});
		app.elements.buttons.back.el.on('click',function(){app.current = String (app.current).slice(0, -1);app.update();});
		app.elements.buttons.plus.el.on('click',function(){app.previous = app.current;app.current='';app.operator='+';app.updateHistory();app.update();});
		app.elements.buttons.minus.el.on('click',function(){app.previous = app.current;app.current='';app.operator='-';app.updateHistory();app.update();});
		app.elements.buttons.times.el.on('click',function(){app.previous = app.current;app.current='';app.operator='&times;';app.updateHistory();app.update();});
		app.elements.buttons.divide.el.on('click',function(){app.previous = app.current;app.current='';app.operator='&divide;';app.updateHistory();app.update();});
		app.elements.buttons.equals.el.on('click',function(){app.calc();});
		app.elements.buttons.divideBy.el.on('click',function(){app.previous=1;app.operator='/';app.calc()});
		app.elements.buttons.square.el.on('click',function(){app.previous=app.current;app.current='';app.operator='²';app.calc()});
		app.elements.buttons.squareRoot.el.on('click',function(){app.operator='²&radic;';app.calc()});
	}
	calc(){
		let app = this;
		let result = 0;
		switch (app.operator){
			case '+':
				result = (app.previous*1)+(app.current*1);
				break;
			case '-':
				result = (app.previous*1)-(app.current*1);
				break;
			case '&times;':
				result = (app.previous*1)*(app.current*1);
				break;
			case '&divide;':
				result = (app.previous*1)/(app.current*1);
				break;
			case '²':
				result = (app.previous*1)*(app.previous*1);
				break;
			case '²&radic;':
				result = Math.sqrt(app.current*1);
				break;
			case '/':
				result = 1/(app.current*1);
				break;
		}
		app.elements.history.el.html(app.previous+app.operator+app.current);
		app.current = result;
		app.update();
	}
	update(clearCurrent){
		let app = this;
		app.elements.display.el.html(app.current);
	}
	updateHistory(){
		let app = this;
		app.elements.history.el.html(app.previous+app.operator);
	}
}