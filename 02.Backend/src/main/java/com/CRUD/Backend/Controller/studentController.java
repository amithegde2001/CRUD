package com.CRUD.Backend.Controller;

import com.CRUD.Backend.Exception.studentNotFoundException;
import com.CRUD.Backend.Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.CRUD.Backend.Repository.studentRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class studentController {

    @Autowired
    private studentRepository studentRepository;


    @PostMapping("/student")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }


    @GetMapping("/students")
    List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    Student getStudentById(@PathVariable int id){
        return studentRepository.findById(id)
                .orElseThrow(()->new studentNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student updateStudent(@RequestBody Student newStudent,@PathVariable int id){
        return studentRepository.findById(id)
                .map(Student ->{
                    Student.setUsn(newStudent.getUsn());
                    Student.setName(newStudent.getName());
                    Student.setEmail(newStudent.getEmail());
                    return studentRepository.save(Student);

        }).orElseThrow(()->new studentNotFoundException(id));

    }

    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable int id){
        if(!studentRepository.existsById(id)){
            throw new studentNotFoundException(id);
        }
        else{
            studentRepository.deleteById(id);
            return "Student with id "+id+" has been deleted successfully.";
        }
    }


}
