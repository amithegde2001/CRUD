package com.CRUD.Backend.Exception;

public class studentNotFoundException extends RuntimeException{
    public studentNotFoundException(int id){
        super("Student not found with student id "+id);
    }

}
