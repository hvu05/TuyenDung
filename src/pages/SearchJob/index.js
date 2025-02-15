import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchJob.scss'
import {
    Button,
    Divider,
    Flex,
    Form,
    Input,
    Select,
    Tag
} from 'antd';
import Back from "../../helper/Back";

function SearchJob() {
    const navigate = useNavigate();
    const data = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer"];
    const skills = ["JavaScript", "React", "Node.js", "Python", "Django", "AWS", "Docker", "Kubernetes", "SQL", "MongoDB"];
    const colors = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];
    
    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillClick = (skill) => {
        setSelectedSkills((prevSkills) =>
            prevSkills.includes(skill)
                ? prevSkills.filter((s) => s !== skill)
                : [...prevSkills, skill]
        );
    };

    const onFinish = (values) => {
        navigate("/filter");
    };

    return (
        <>
            <h1 className="header">Tìm kiếm công việc phù hợp tại đây</h1>
            <div className="block">
                <Form name="basic" onFinish={onFinish} autoComplete="off">
                    <Form.Item label="Nhập từ khóa" name="keyword">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Thành phố" name="city">
                        <Select allowClear>
                            <Select.Option value="all">All</Select.Option>
                            {data.map((item, index) => (
                                <Select.Option key={index} value={item}>{item}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Divider className="divider-custom" orientation="left">Các skill cần ứng tuyển</Divider>
                    <Flex gap="4px 0" wrap>
                        {skills.map((skill, index) => (
                            <Tag
                                key={index}
                                color={colors[index % colors.length]}
                                onClick={() => handleSkillClick(skill)}
                                style={{
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    border: selectedSkills.includes(skill) ? '2px solid black' : 'none'
                                }}
                            >
                                {skill}
                            </Tag>
                        ))}
                    </Flex>
                    <Form.Item className="buttonSubmit">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    <div className="note"> ⚠️ Lưu ý: chức năng này hiện tại chưa được xử lý, bấm quay lại phía dưới
                        <Back />
                    </div>
                </Form>
            </div>
        </>
    );
}

export default SearchJob;
