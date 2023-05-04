---
title: itextPdf
---


## itextPdf 解析富文本标签
maven 依赖
```text
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itextpdf</artifactId>
    <version>5.5.9</version>
</dependency>
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itext-asian</artifactId>
    <version>5.2.0</version>
</dependency>
<dependency>
    <groupId>com.itextpdf.tool</groupId>
    <artifactId>xmlworker</artifactId>
    <version>5.5.10</version>
</dependency>
```
xml解析 富文本 工具类
```java
import com.itextpdf.text.*;
import com.itextpdf.tool.xml.ElementList;
import com.itextpdf.tool.xml.XMLWorker;
import com.itextpdf.tool.xml.XMLWorkerFontProvider;
import com.itextpdf.tool.xml.XMLWorkerHelper;
import com.itextpdf.tool.xml.css.CssFile;
import com.itextpdf.tool.xml.css.StyleAttrCSSResolver;
import com.itextpdf.tool.xml.html.CssAppliers;
import com.itextpdf.tool.xml.html.CssAppliersImpl;
import com.itextpdf.tool.xml.html.Tags;
import com.itextpdf.tool.xml.parser.XMLParser;
import com.itextpdf.tool.xml.pipeline.css.CSSResolver;
import com.itextpdf.tool.xml.pipeline.css.CssResolverPipeline;
import com.itextpdf.tool.xml.pipeline.end.ElementHandlerPipeline;
import com.itextpdf.tool.xml.pipeline.html.HtmlPipeline;
import com.itextpdf.tool.xml.pipeline.html.HtmlPipelineContext;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MyXMLWorkerHelper  {
    public static class MyFontsProvider extends XMLWorkerFontProvider {
        public MyFontsProvider() {
            super(null, null);
        }

        @Override
        public Font getFont(final String fontname, String encoding, float size, final int style) {
            String fntname = fontname;
            if (fntname == null) {
                fntname = "宋体";
            }
            return super.getFont(fntname, encoding, size, style);
        }
    }

    public static ElementList parseToElementList(String html, String css) throws IOException {
        // CSS
        CSSResolver cssResolver = new StyleAttrCSSResolver();
        if (css != null) {
            CssFile cssFile = XMLWorkerHelper.getCSS(new ByteArrayInputStream(css.getBytes()));
            cssResolver.addCss(cssFile);
        }

        // HTML
        MyFontsProvider fontProvider = new MyFontsProvider();
        CssAppliers cssAppliers = new CssAppliersImpl(fontProvider);
        HtmlPipelineContext htmlContext = new HtmlPipelineContext(cssAppliers);
        htmlContext.setTagFactory(Tags.getHtmlTagProcessorFactory());
        htmlContext.autoBookmark(false);

        // Pipelines
        ElementList elements = new ElementList();
        ElementHandlerPipeline end = new ElementHandlerPipeline(elements, null);
        HtmlPipeline htmlPipeline = new HtmlPipeline(htmlContext, end);
        CssResolverPipeline cssPipeline = new CssResolverPipeline(cssResolver, htmlPipeline);

        // XML Worker
        XMLWorker worker = new XMLWorker(cssPipeline, true);
        XMLParser p = new XMLParser(worker);
        // fix: ul/ol 中换行会解析为 li标签的问题
        Pattern reg = Pattern.compile("<[ou]l.*>(\\s+)<li|</li>(\\s+)<((li)|(/[ou]l>))",Pattern.CASE_INSENSITIVE|Pattern.MULTILINE);
        Matcher matcher = reg.matcher(html);
        StringBuffer operatorStr=new StringBuffer(html);
        while (matcher.find()){
            String group1 = matcher.group(1);
            String group2 = matcher.group(2);
            if(group1!=null){
                operatorStr.replace(matcher.start(1),matcher.end(1),"");
            }
            if(group2!=null){
                operatorStr.replace(matcher.start(2),matcher.end(2),"");
            }
            matcher = reg.matcher(operatorStr);
        }
        // fix: sub sup 标签不生效 添加样式
        html = operatorStr.toString().replace("<sub>", "<sub style=\"vertical-align: sub;\">").replace("<sup>", "<sup style=\"vertical-align: super;\">");
        // fix: XMLWorker 解析 xml, html 标签中的单标签结构不符合要求
        html = html.replace("<br>", "<br></br>").replace("<hr>", "<hr></hr>");
        p.parse(new ByteArrayInputStream(html.getBytes()));

//        for (int i = 0; i < elements.size(); i++) {
//            Element element = elements.get(i);
//            int type = element.type();
//            if (type==14){
//                List element1 = (List) element;
//                element1.getItems().removeIf(item->{
//                    int type1 = item.type();
//                    if(type1==15){
//                        return ((Chunk) ((ListItem) item).get(0)).getContent().equals("\n");
//                    }else {
//                        return false;
//                    }
//                });
//            }
//        }
        return elements;
    }

}
```

代码中使用
```java
        PdfPCell cell1 = new PdfPCell();
        cell1.setHorizontalAlignment(Element.ALIGN_LEFT);
        cell1.setVerticalAlignment(Element.ALIGN_TOP);
        for (Element e : MyXMLWorkerHelper.parseToElementList(projectInfo.getCompAbout(), null)) {
            cell1.addElement(e);
        }
        table.addCell(cell1);
        document.add(table);
```
