/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-29 09:53:31
 * @LastEditors: lax
 * @LastEditTime: 2020-12-15 22:00:56
 */
const Earth = require("./../../src/pojo/taobi/Earth");

for (let i = -9; i <= 9; i++) {
	if (i != 0) {
		const earth = new Earth(i);
		console.log("用局:" + i);
		console.log(earth.toName());
	}
}
//-1:[ [ '丁', '己', '乙' ], [ '丙', '癸', '辛' ], [ '庚', '戊', '壬' ] ]
//-2:[ [ '丙', '庚', '戊' ], [ '乙', '丁', '壬' ], [ '辛', '己', '癸' ] ]
//-3:[ [ '乙', '辛', '己' ], [ '戊', '丙', '癸' ], [ '壬', '庚', '丁' ] ]
//-4:[ [ '戊', '壬', '庚' ], [ '己', '乙', '丁' ], [ '癸', '辛', '丙' ] ]
//-5:[ [ '己', '癸', '辛' ], [ '庚', '戊', '丙' ], [ '丁', '壬', '乙' ] ]
//-6:[ [ '庚', '丁', '壬' ], [ '辛', '己', '乙' ], [ '丙', '癸', '戊' ] ]
//-7:[ [ '辛', '丙', '癸' ], [ '壬', '庚', '戊' ], [ '乙', '丁', '己' ] ]
//-8:[ [ '壬', '乙', '丁' ], [ '癸', '辛', '己' ], [ '戊', '丙', '庚' ] ]
//-9:[ [ '癸', '戊', '丙' ], [ '丁', '壬', '庚' ], [ '己', '乙', '辛' ] ]
// 1:[ [ '辛', '乙', '己' ], [ '庚', '壬', '丁' ], [ '丙', '戊', '癸' ] ]
// 2:[ [ '庚', '丙', '戊' ], [ '己', '辛', '癸' ], [ '丁', '乙', '壬' ] ]
// 3:[ [ '己', '丁', '乙' ], [ '戊', '庚', '壬' ], [ '癸', '丙', '辛' ] ]
// 4:[ [ '戊', '癸', '丙' ], [ '乙', '己', '辛' ], [ '壬', '丁', '庚' ] ]
// 5:[ [ '乙', '壬', '丁' ], [ '丙', '戊', '庚' ], [ '辛', '癸', '己' ] ]
// 6:[ [ '丙', '辛', '癸' ], [ '丁', '乙', '己' ], [ '庚', '壬', '戊' ] ]
// 7:[ [ '丁', '庚', '壬' ], [ '癸', '丙', '戊' ], [ '己', '辛', '乙' ] ]
// 8:[ [ '癸', '己', '辛' ], [ '壬', '丁', '乙' ], [ '戊', '庚', '丙' ] ]
// 9:[ [ '壬', '戊', '庚' ], [ '辛', '癸', '丙' ], [ '乙', '己', '丁' ] ]
