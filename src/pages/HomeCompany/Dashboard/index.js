import { getCookie } from "../../../helper/cookie";
import useFetchAPIcv from "../../../helper/useFetchAPIcv";
import useFetchAPIjob from "../../../helper/useFetchAPIjob";
import "./Dashboard.scss"; // Import file SCSS mới

function Dashboard() {
    const { jobs, loadingJobs } = useFetchAPIjob();
    const { cv, loadingCv } = useFetchAPIcv();

    const CountNum = (items) => (Array.isArray(items) ? items.length : 0);

    const name = getCookie("companyName");
    const email = getCookie("email");
    const phone = getCookie("phone");

    const countReadUnreadCVs = (cvArray) => {
        return cvArray.reduce(
            (acc, cv) => {
                if (cv.statusRead) {
                    acc.read += 1;
                } else {
                    acc.unread += 1;
                }
                return acc;
            },
            { read: 0, unread: 0 }
        );
    };
    const { read, unread } = countReadUnreadCVs(cv);
    return (
        <div className="dashboard">
            <div className="dashboard__section">
                <h2 className="dashboard__title">Job</h2>
                <span className="dashboard__label">Số lượng:</span>
                <span className="dashboard__count">{CountNum(jobs)}</span>
            </div>

            <div className="dashboard__section">
                <h2 className="dashboard__title">CV</h2>
                <span className="dashboard__label">Số lượng:</span>
                <span className="dashboard__count">{CountNum(cv)}</span>
                <div>
                    <span className="dashboard__label">Cv đã đọc:</span>
                    <span className="dashboard__count">{read}</span>
                </div>
                <span className="dashboard__label">Cv chưa đọc:</span>
                <span className="dashboard__count">{unread}</span>
            </div>

            <div className="dashboard__section dashboard__section--company">
                <h2 className="dashboard__title">Thông tin công ty</h2>
                <div className="dashboard__info">
                    <div className="dashboard__info-item">
                        <span className="dashboard__info-label">Tên:</span> {name}
                    </div>
                    <div className="dashboard__info-item">
                        <span className="dashboard__info-label">Email:</span> {email}
                    </div>
                    <div className="dashboard__info-item">
                        <span className="dashboard__info-label">Số điện thoại:</span> {phone}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
