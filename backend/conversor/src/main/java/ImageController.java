import org.apache.batik.transcoder.TranscoderException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/converter")
public class ImageConversionController {

    @PostMapping(produces = MediaType.IMAGE_SVG_XML_VALUE)
    public byte[] convertImageToSVG(@RequestBody byte[] imageBytes, @RequestParam String imageType) throws IOException, TranscoderException {
        byte[] svgBytes = ImageConverter.convertImageToSVG(imageBytes, imageType);
        return svgBytes;
    }
}
