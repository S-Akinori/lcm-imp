import Image from "next/image"
import Link from "next/link"
import Layout from "src/components/Layout"
import Box from "src/components/parts/Box"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import GalleryBox from "src/components/parts/Gallery/GalleryBox"
import { galleryContents } from "src/contents/gallery"

const GalleryPage = () => {
  return (
    <Layout>
      <FV en="GALLERY" title="お客様の声" src="/images/concept.jpg" />

      <Container className="py-12">
        <div className="flex flex-wrap">
          {galleryContents && galleryContents.map(content => (
            <div key={content.id} className="p-4 md:w-1/2">
              <GalleryBox src={content.src} date={content.date} info={content.info} href={content.href} title={content.title} text={content.text} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default GalleryPage