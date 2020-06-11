/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

export function formatTeamForce(arr: any[]): any {
	if (arr.length) {	
		let newArr: any[] = [];

		arr.forEach((item: any) => {
			newArr.push(...item);
		});

		let finalReturn: any[] = [...newArr.reduce((mp: any, o: any): any => {
			if (!mp.has(o.name)) mp.set(o.name, { ...o, count: 0 });
				mp.get(o.name).count++;
				return mp;
			}, new Map).values()];

		return finalReturn;
	};
};