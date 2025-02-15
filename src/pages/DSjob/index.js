import React, { useState, useEffect } from "react";
import { Card, Tag, Row, Col, Divider, Drawer } from "antd";
import axios from "axios";
import "./job.scss"
import useFetchAPIjob from "../../helper/useFetchAPIjob";
import Forward from "../../helper/Forward";
import Back from "../../helper/Back";

const JobList = () => {
  // const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // ✅ Thêm state lưu job được chọn
  const [open, setOpen] = useState(false);

  const {jobs, loadingJobs} = useFetchAPIjob();
  // console.log(useFetchAPIjob());
  const showDrawer = (job) => {
    setSelectedJob(job); // ✅ Lưu job vào state
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelectedJob(null); // ✅ Reset job khi đóng Drawer
  };

  return (
    <>
      <Back />
      <Forward />
      <Row gutter={[16, 16]}>
        {jobs.map((job) => (
          <Col xs={24} sm={12} md={8} lg={6} key={job.idCompany}>
            <Card
              onClick={() => showDrawer(job)} // ✅ Truyền job vào hàm
              title={job.name}
              bordered={false}
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <p><strong>Mức lương:</strong> ${job.salary} USD</p>
              <p><strong>Công ty:</strong> {job.idCompany}</p>
              <div>
                {job.tags.map((tag) => (
                  <Tag color="blue" key={tag}>{tag}</Tag>
                ))}
              </div>
              <p>{job.description.substring(0, 100)}...</p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Drawer hiển thị thông tin job */}
      <Drawer width={640} placement="right" closable={true} onClose={onClose} open={open}>
        {selectedJob && (
          <>
            <p className="detail" style={{ marginBottom: 24 }}>
              Chi tiết công việc
            </p>
            <Row>
              <Col span={24}>
                <p><strong>Tên công việc:</strong> {selectedJob.name}</p>
                <p><strong>Mức lương:</strong> ${selectedJob.salary} USD</p>
                <p><strong>Công ty:</strong> {selectedJob.idCompany}</p>
                <p><strong>Mô tả:</strong> {selectedJob.description}</p>
                <p><strong>Kỹ năng yêu cầu:</strong></p>
                <div>
                  {selectedJob.tags.map((tag) => (
                    <Tag color="blue" key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Col>
            </Row>
          </>
        )}
      </Drawer>
      {/* Joblist  */}
    </>
  );
};

export default JobList;
