package com.company.myutils;

import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author: administrator
 * @date: 2023/2/27 15:13
 * 提取 mdd mdx:
 * https://zhuanlan.zhihu.com/p/512906029
 */

public class MddImgExtractor {
    public static void main(String[] args) throws IOException {
        String imgReg = "base64=\"([^\"]+)\"";
        File file = new File("F:\\workspace\\Demo\\LDOCE5_v1.35\\mdx\\1-35.mdx.txt");
        FileReader fileReader = new FileReader(file, StandardCharsets.UTF_8);
        BufferedReader bufferedReader = new BufferedReader(fileReader);
        String line = bufferedReader.readLine();
        System.out.println(line.length());
        int counter = 0;
        String lineLeft = "";
        while (line != null) {
            Pattern pattern = Pattern.compile(imgReg, Pattern.CASE_INSENSITIVE);
            Matcher matcher = pattern.matcher(lineLeft + line);
            while (matcher.find()) {
                writeFile(matcher.group(1), counter);
                counter++;
            }
            try {
                lineLeft = line.substring(matcher.end());
            } catch (Exception e) {
                lineLeft = "";
            }
            line = bufferedReader.readLine();
        }

    }

    public static void writeFile(String base64String, int counter) {
        String[] strings = base64String.split(",");
        String extension;
        switch (strings[0]) {
            //check image's extension
            case "data:image/jpeg;base64":
                extension = "jpeg";
                break;
            case "data:image/png;base64":
                extension = "png";
                break;
            default://should write cases for more images types
                extension = "jpg";
                break;
        }
        //convert base64 string to binary data
        if (strings.length > 1) {
            byte[] data = DatatypeConverter.parseBase64Binary(strings[1]);
            String path = "F:\\workspace\\Demo\\LDOCE5_v1.35\\images\\" + counter + "." + extension;
            File file = new File(path);
            try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
                outputStream.write(data);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
