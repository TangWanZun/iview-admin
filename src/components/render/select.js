export default function(
_this,
{
	//当前key值
	key = '',
	//当前选项
	keyName='',
	//当前的全部数据
	dataName = '',
	//当前code值
	code = 'Code',
	//当前name值
	name = 'Name',
	//当数据变化时进行返回
	onChange = undefined
}={}) {
	return (h, params) => {
		let optionList = [];
		let data = _this[dataName];
		for(let i = 0;i<data.length;i++){
			optionList.push(
				h(
					'Option', {
						props: {
							value: data[i][code],
							label: data[i][name]
						}
					},`${data[i][name]}`
				)
			)
		}
		return h('i-select',
		{
			props:{
				value:_this[keyName][params.index][key]
			},
			on:{
				'on-change'(val){
					_this[keyName][params.index][key] = val;
					onChange&&onChange(val);
				}
			}
		},optionList);
	}
}
