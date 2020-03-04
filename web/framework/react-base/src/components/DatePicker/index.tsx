import React from 'react';
import { DatePicker } from 'antd';
import { Moment } from 'moment';

function MyDatePicker(props: any) {
	var serverFormat = props.serverFormat;
	var oldChange = props.onChange;
	var newProps = {
		...props,
		onChange: function(date: Moment, dateStrings: string) {
			date && transformMoment(date, serverFormat);
			oldChange(date, dateStrings);
		},
	};
	return <DatePicker {...newProps} />;
}

function transformMoment(myMoment: Moment, serverFormat: string) {
	myMoment.toJSON = function() {
		serverFormat = serverFormat || 'x';
		var value = myMoment.format(serverFormat);
		if (serverFormat === 'x') {
			value = String(parseInt(value));
		}
		return value;
	};
	return myMoment;
}

export default MyDatePicker;
