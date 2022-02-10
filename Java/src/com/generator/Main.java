package com.generator;

public class Main {

    public static void main(String[] args) {
	// write your code here
        PasswordGenerator passwordGenerator = new PasswordGenerator();
        System.out.println(passwordGenerator.generatePassword(40));
    }
}
