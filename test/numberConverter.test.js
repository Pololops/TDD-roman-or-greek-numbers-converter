const { convert } = require('../js/numberConverter');

// Test Roman Convertion
describe('Roman Translator', () => {
	it('should return a string', () => {
		expect(typeof convert()).toEqual('string');
	});

	it('0 should return nothing', () => {
		expect(convert(0)).toEqual('');
	});

	it('1 should return I', () => {
		expect(convert(1)).toEqual('I');
	});

	it('2 should return II', () => {
		expect(convert(2)).toEqual('II');
	});

	it('3 should return III', () => {
		expect(convert(3)).toEqual('III');
	});

	it('4 should return IV', () => {
		expect(convert(4)).toEqual('IV');
	});

	it('5 should return V', () => {
		expect(convert(5)).toEqual('V');
	});

	it('6 should return VI', () => {
		expect(convert(6)).toEqual('VI');
	});
	
	it('7 should return VII', () => {
		expect(convert(7)).toEqual('VII');
	});
	
	it('8 should return VIII', () => {
		expect(convert(8)).toEqual('VIII');
	});
	
	it('9 should return IX', () => {
		expect(convert(9)).toEqual('IX');
	});
	
	it('10 should return X', () => {
		expect(convert(10)).toEqual('X');
	});
	
	it('19 should return XIX', () => {
		expect(convert(19)).toEqual('XIX');
	});
	
	it('20 should return XX', () => {
		expect(convert(20)).toEqual('XX');
	});
	
	it('43 should return XLIII', () => {
		expect(convert(43)).toEqual('XLIII');
	});
	
	it('44 should return XLIV', () => {
		expect(convert(44)).toEqual('XLIV');
	});
	
	it('45 should return XLV', () => {
		expect(convert(45)).toEqual('XLV');
	});
	
	it('48 should return XLVIII', () => {
		expect(convert(48)).toEqual('XLVIII');
	});
	
	it('49 should return XLIX', () => {
		expect(convert(49)).toEqual('XLIX');
	});
	
	it('50 should return L', () => {
		expect(convert(50)).toEqual('L');
	});
	
	it('53 should return LIII', () => {
		expect(convert(53)).toEqual('LIII');
	});
	
	it('54 should return LIV', () => {
		expect(convert(54)).toEqual('LIV');
	});
	
	it('99 should return XCIX', () => {
		expect(convert(99)).toEqual('XCIX');
	});
	
	it('100 should return C', () => {
		expect(convert(100)).toEqual('C');
	});
	
	it('153 should return CLIII', () => {
		expect(convert(153)).toEqual('CLIII');
	});
	
	it('447 should return CDXLVII', () => {
		expect(convert(447)).toEqual('CDXLVII');
	});
	
	it('500 should return D', () => {
		expect(convert(500)).toEqual('D');
	});
	
	it('949 should return CMXLIX', () => {
		expect(convert(949)).toEqual('CMXLIX');
	});
	
	it('1000 should return M', () => {
		expect(convert(1000)).toEqual('M');
	});
	
	it('1727 should return MDCCXXVII', () => {
		expect(convert(1727)).toEqual('MDCCXXVII');
	});
	
	it('3727 should return MMMDCCXXVII', () => {
		expect(convert(3727)).toEqual('MMMDCCXXVII');
	});
});


// Test Greek Convertion
describe('Greek Translator', () => {
	it('should return a string', () => {
		expect(typeof convert('', 'greek')).toEqual('string');
	});

	it('0 should return nothing', () => {
		expect(convert(0, 'greek')).toEqual('');
	});

	it('1 should return A', () => {
		expect(convert(1, 'greek')).toEqual('A');
	});

	it('2 should return B', () => {
		expect(convert(2, 'greek')).toEqual('B');
	});

	it('3 should return ??', () => {
		expect(convert(3, 'greek')).toEqual('??');
	});

	it('4 should return ??', () => {
		expect(convert(4, 'greek')).toEqual('??');
	});

	it('5 should return ??', () => {
		expect(convert(5, 'greek')).toEqual('??');
	});

	it('6 should return ??', () => {
		expect(convert(6, 'greek')).toEqual('??');
	});

	it('7 should return ??', () => {
		expect(convert(7, 'greek')).toEqual('??');
	});

	it('8 should return ??', () => {
		expect(convert(8, 'greek')).toEqual('??');
	});

	it('9 should return ??', () => {
		expect(convert(9, 'greek')).toEqual('??');
	});

	it('10 should return ??', () => {
		expect(convert(10, 'greek')).toEqual('??');
	});

	it('20 should return K', () => {
		expect(convert(20, 'greek')).toEqual('K');
	});

	it('30 should return ??', () => {
		expect(convert(30, 'greek')).toEqual('??');
	});

	it('40 should return M', () => {
		expect(convert(40, 'greek')).toEqual('M');
	});

	it('50 should return N', () => {
		expect(convert(50, 'greek')).toEqual('N');
	});

	it('60 should return ??', () => {
		expect(convert(60, 'greek')).toEqual('??');
	});

	it('70 should return ??', () => {
		expect(convert(70, 'greek')).toEqual('??');
	});

	it('80 should return ??', () => {
		expect(convert(80, 'greek')).toEqual('??');
	});

	it('90 should return ??', () => {
		expect(convert(90, 'greek')).toEqual('??');
	});

	it('100 should return ??', () => {
		expect(convert(100, 'greek')).toEqual('??');
	});

	it('200 should return ??', () => {
		expect(convert(200, 'greek')).toEqual('??');
	});

	it('300 should return T', () => {
		expect(convert(300, 'greek')).toEqual('T');
	});

	it('400 should return Y', () => {
		expect(convert(400, 'greek')).toEqual('Y');
	});

	it('500 should return ??', () => {
		expect(convert(500, 'greek')).toEqual('??');
	});

	it('600 should return X', () => {
		expect(convert(600, 'greek')).toEqual('X');
	});

	it('700 should return ??', () => {
		expect(convert(700, 'greek')).toEqual('??');
	});

	it('800 should return ??', () => {
		expect(convert(800, 'greek')).toEqual('??');
	});

	it('900 should return ??', () => {
		expect(convert(900, 'greek')).toEqual('??');
	});

	it('1000 should return ????', () => {
		expect(convert(1000, 'greek')).toEqual('????');
	});

	it('2000 should return ??B', () => {
		expect(convert(2000, 'greek')).toEqual('??B');
	});

	it('3000 should return ????', () => {
		expect(convert(3000, 'greek')).toEqual('????');
	});
});
