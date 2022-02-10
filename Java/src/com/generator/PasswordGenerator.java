package com.generator;


import java.security.SecureRandom;
import java.util.*;
import java.util.stream.Collector;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class PasswordGenerator {


    public String generatePassword(int length){
        String symbols = randomSpecialCharacterGenerator();
        Random random = new Random();
        List<Character> randomChars = new ArrayList<>();

        for (int i = 0; i < Math.ceil(length/4.0); i++) {
            char randomLowerCaseLetter = (char) (random.nextInt(26) + 'a');
            char randomUpperCaseLetter = (char) (random.nextInt(26) + 'A');
            char randomNumber = (char) (random.nextInt(10)+ '0');

            randomChars.add(randomLowerCaseLetter);
            randomChars.add(randomUpperCaseLetter);
            randomChars.add(randomNumber);
            randomChars.add(symbols.charAt(random.nextInt(symbols.length())));
        }
        Collections.shuffle(randomChars);
        StringBuilder stringBuilder = new StringBuilder();

        for (Character character:
                randomChars) {
            stringBuilder.append(character);
        }

        String password = stringBuilder.toString();

        return password;
    }

    private String randomSpecialCharacterGenerator(){
        Random random = new SecureRandom();
        IntStream inputStream = random.ints(15, 33,48);
        Stream<Character> specialChars = inputStream.mapToObj(data -> (char) data);
        return (specialChars.collect(Collector.of(
                StringBuilder::new,
                StringBuilder::append,
                StringBuilder::append,
                StringBuilder::toString
        )));
    }
}
