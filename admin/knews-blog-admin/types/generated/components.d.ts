import type { Schema, Struct } from '@strapi/strapi';

export interface SlideSlideItem extends Struct.ComponentSchema {
  collectionName: 'components_slide_slide_items';
  info: {
    description: '';
    displayName: 'slide-item';
    icon: 'layout';
  };
  attributes: {
    articuloRelacionado: Schema.Attribute.Relation<
      'oneToOne',
      'api::articulo.articulo'
    >;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    link: Schema.Attribute.String;
    subtitulo: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    titulo: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'slide.slide-item': SlideSlideItem;
    }
  }
}
