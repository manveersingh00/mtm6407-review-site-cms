import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Movie Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'director',
            title: 'Director',
            type: 'string',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(10),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
        }),
        defineField({
            name: 'poster',
            title: 'Movie Poster',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
