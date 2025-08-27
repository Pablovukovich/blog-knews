import type { Schema, Struct } from '@strapi/strapi';

export interface SlidesSlideArticulo extends Struct.ComponentSchema {
  collectionName: 'components_slides_slide_articulos';
  info: {
    displayName: 'slide_articulo';
  };
  attributes: {
    articulo: Schema.Attribute.Relation<'oneToOne', 'api::articulo.articulo'>;
  };
}

export interface SlidesSlidePersonalizado extends Struct.ComponentSchema {
  collectionName: 'components_slides_slide_personalizados';
  info: {
    displayName: 'slide_personalizado';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    enlace_boton: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    texto_boton: Schema.Attribute.String;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'slides.slide-articulo': SlidesSlideArticulo;
      'slides.slide-personalizado': SlidesSlidePersonalizado;
    }
  }
}
