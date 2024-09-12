package com.student.Entity;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name="courses")
@Data
public class Student {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        @Column(name = "student_name")
        private String studentName;
        @Column(name = "university_name")
        private String universityName;
        @Column(name = "university_course")
        private String universityCourse;

}


