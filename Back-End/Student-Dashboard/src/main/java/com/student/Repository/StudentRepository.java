package com.student.Repository;

import com.student.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {

  //  Optional<Student> findByCourseName(String course);
}
