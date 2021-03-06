import dayjs from "dayjs";
import "dayjs/locale/es";
import utc from "dayjs/plugin/utc";

import IDateProvider from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {

    addHours(hours: number): Date {
        return dayjs().add(hours, "hour").toDate();
    }

}
export default DayjsDateProvider;
