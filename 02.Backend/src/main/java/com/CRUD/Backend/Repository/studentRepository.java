package com.CRUD.Backend.Repository;

import com.CRUD.Backend.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface studentRepository extends JpaRepository<Student,Integer> {
}
