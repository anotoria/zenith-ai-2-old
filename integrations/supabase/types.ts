export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          email: string
          avatar_url: string | null
          created_at: string
          updated_at: string
          is_active: boolean
          address: string | null
          website: string | null
          facebook: string | null
          instagram: string | null
          twitter: string | null
          linkedin: string | null
          whatsapp: string | null
        }
        Insert: {
          id: string
          name: string
          email: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          is_active?: boolean
          address?: string | null
          website?: string | null
          facebook?: string | null
          instagram?: string | null
          twitter?: string | null
          linkedin?: string | null
          whatsapp?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          is_active?: boolean
          address?: string | null
          website?: string | null
          facebook?: string | null
          instagram?: string | null
          twitter?: string | null
          linkedin?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          user_id: string
          role: Database['public']['Enums']['app_role']
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role: Database['public']['Enums']['app_role']
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: Database['public']['Enums']['app_role']
          created_at?: string
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          id: string
          user_id: string
          can_access_articles: boolean
          can_access_planner: boolean
          can_access_ai_creator: boolean
          can_create_trails: boolean
          can_manage_users: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          can_access_articles?: boolean
          can_access_planner?: boolean
          can_access_ai_creator?: boolean
          can_create_trails?: boolean
          can_manage_users?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          can_access_articles?: boolean
          can_access_planner?: boolean
          can_access_ai_creator?: boolean
          can_create_trails?: boolean
          can_manage_users?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      social_integrations: {
        Row: {
          id: string
          user_id: string
          platform: Database['public']['Enums']['platform_type']
          is_connected: boolean
          username: string | null
          api_key: string | null
          api_username: string | null
          site_url: string | null
          app_id: string | null
          client_secret: string | null
          selected_page_id: string | null
          selected_page_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          platform: Database['public']['Enums']['platform_type']
          is_connected?: boolean
          username?: string | null
          api_key?: string | null
          api_username?: string | null
          site_url?: string | null
          app_id?: string | null
          client_secret?: string | null
          selected_page_id?: string | null
          selected_page_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          platform?: Database['public']['Enums']['platform_type']
          is_connected?: boolean
          username?: string | null
          api_key?: string | null
          api_username?: string | null
          site_url?: string | null
          app_id?: string | null
          client_secret?: string | null
          selected_page_id?: string | null
          selected_page_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      articles: {
        Row: {
          id: string
          user_id: string
          title: string
          original_link: string | null
          is_scheduled: boolean
          auto_post_status: Database['public']['Enums']['auto_post_status']
          auto_post_platform: Database['public']['Enums']['platform_type'] | null
          auto_posted_at: string | null
          selected_copy_id: string | null
          selected_image_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          original_link?: string | null
          is_scheduled?: boolean
          auto_post_status?: Database['public']['Enums']['auto_post_status']
          auto_post_platform?: Database['public']['Enums']['platform_type'] | null
          auto_posted_at?: string | null
          selected_copy_id?: string | null
          selected_image_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          original_link?: string | null
          is_scheduled?: boolean
          auto_post_status?: Database['public']['Enums']['auto_post_status']
          auto_post_platform?: Database['public']['Enums']['platform_type'] | null
          auto_posted_at?: string | null
          selected_copy_id?: string | null
          selected_image_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      article_copies: {
        Row: {
          id: string
          article_id: string
          text: string
          created_at: string
        }
        Insert: {
          id?: string
          article_id: string
          text: string
          created_at?: string
        }
        Update: {
          id?: string
          article_id?: string
          text?: string
          created_at?: string
        }
        Relationships: []
      }
      article_images: {
        Row: {
          id: string
          article_id: string
          url: string
          prompt: string
          created_at: string
        }
        Insert: {
          id?: string
          article_id: string
          url: string
          prompt: string
          created_at?: string
        }
        Update: {
          id?: string
          article_id?: string
          url?: string
          prompt?: string
          created_at?: string
        }
        Relationships: []
      }
      scheduled_posts: {
        Row: {
          id: string
          user_id: string
          article_id: string | null
          platform: Database['public']['Enums']['platform_type']
          content: string
          image_url: string | null
          media_type: Database['public']['Enums']['media_type'] | null
          scheduled_at: string
          status: Database['public']['Enums']['post_status']
          error_message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          article_id?: string | null
          platform: Database['public']['Enums']['platform_type']
          content: string
          image_url?: string | null
          media_type?: Database['public']['Enums']['media_type'] | null
          scheduled_at: string
          status?: Database['public']['Enums']['post_status']
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          article_id?: string | null
          platform?: Database['public']['Enums']['platform_type']
          content?: string
          image_url?: string | null
          media_type?: Database['public']['Enums']['media_type'] | null
          scheduled_at?: string
          status?: Database['public']['Enums']['post_status']
          error_message?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      learning_trails: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          is_public: boolean
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          is_public?: boolean
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          is_public?: boolean
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      trail_modules: {
        Row: {
          id: string
          trail_id: string
          title: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          trail_id: string
          title: string
          order_index: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          trail_id?: string
          title?: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      module_content: {
        Row: {
          id: string
          module_id: string
          type: Database['public']['Enums']['module_content_type']
          title: string
          content: string | null
          url: string | null
          file_name: string | null
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          module_id: string
          type: Database['public']['Enums']['module_content_type']
          title: string
          content?: string | null
          url?: string | null
          file_name?: string | null
          order_index: number
          created_at?: string
        }
        Update: {
          id?: string
          module_id?: string
          type?: Database['public']['Enums']['module_content_type']
          title?: string
          content?: string | null
          url?: string | null
          file_name?: string | null
          order_index?: number
          created_at?: string
        }
        Relationships: []
      }
      saved_items: {
        Row: {
          id: string
          user_id: string
          type: Database['public']['Enums']['saved_item_type']
          prompt: string
          content: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: Database['public']['Enums']['saved_item_type']
          prompt: string
          content: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: Database['public']['Enums']['saved_item_type']
          prompt?: string
          content?: string
          description?: string | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database['public']['Enums']['app_role']
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: 'admin' | 'user' | 'moderator'
      auto_post_status: 'PENDING' | 'SUCCESS' | 'ERROR' | 'NONE'
      media_type: 'image' | 'video'
      module_content_type: 'VIDEO' | 'IMAGE' | 'DOCUMENT' | 'TEXT'
      platform_type: 'Facebook' | 'Instagram' | 'TikTok' | 'LinkedIn' | 'WordPress'
      post_status: 'Scheduled' | 'Published' | 'Draft' | 'Error'
      saved_item_type: 'IMAGE' | 'VIDEO' | 'COPY'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
