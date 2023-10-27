import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import 'dayjs/locale/en-gb.js';

dayjs.extend(localizedFormat);

dayjs.locale('en-GB');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DayjsPlugin(app: App): void {

}