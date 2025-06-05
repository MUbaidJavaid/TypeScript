var arrType: string[] = ['a', 'b', 'c'];
var arrType2: Array<string> = ['a', 'b', 'c'];
// var arrType3: (string | number)[] = ['a', 'b', 1, 2];
// var arrType4: Array<string | number> = ['a', 'b', 1, 2];
// var arrType5: (string | number)[] = ['a', 'b', 1, 2];
// var arrType6: Array<string | number> = ['a', 'b', 1, 2];
// var arrType7: (string | number)[] = ['a', 'b', 1, 2]; 

 var arrType8: Array<number> = [ 1, 2];
var arrType9: Number[] = [ 1, 2, 3, 4, 5 ];

// array types with readonly can't be modified
var arrType10: ReadonlyArray<number>= [1, 2, 3, 4, 5];
var arrType11: readonly number[] = [1, 2, 3, 4, 5];
var arrType12: ReadonlyArray<string> = ['a', 'b', 'c'];
var arrType13: readonly string[] = ['a', 'b', 'c'];
