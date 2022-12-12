export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      Actions: {
        Row: {
          creator: string;
          name: string;
          last_update: string;
          id: number;
        };
        Insert: {
          creator: string;
          name: string;
          last_update: string;
          id?: number;
        };
        Update: {
          creator?: string;
          name?: string;
          last_update?: string;
          id?: number;
        };
      };
      AttemptedRuns: {
        Row: {
          reason: string;
          id: number;
        };
        Insert: {
          reason: string;
          id?: number;
        };
        Update: {
          reason?: string;
          id?: number;
        };
      };
      Badges: {
        Row: {
          action_id: number;
          metric: string;
          location_path: string;
          public_uri: string;
          value: string;
          id: number;
          last_generated: string;
        };
        Insert: {
          action_id: number;
          metric: string;
          location_path: string;
          public_uri: string;
          value: string;
          id?: number;
          last_generated?: string;
        };
        Update: {
          action_id?: number;
          metric?: string;
          location_path?: string;
          public_uri?: string;
          value?: string;
          id?: number;
          last_generated?: string;
        };
      };
      BadgeViews: {
        Row: {
          badge_id: number;
          utm_param_id: number;
          timestamp: string | null;
          id: number;
        };
        Insert: {
          badge_id: number;
          utm_param_id: number;
          timestamp?: string | null;
          id?: number;
        };
        Update: {
          badge_id?: number;
          utm_param_id?: number;
          timestamp?: string | null;
          id?: number;
        };
      };
      MetricDefinitions: {
        Row: {
          metric: string;
          query: string;
          parameters: string[];
          return_column: string | null;
        };
        Insert: {
          metric: string;
          query: string;
          parameters: string[];
          return_column?: string | null;
        };
        Update: {
          metric?: string;
          query?: string;
          parameters?: string[];
          return_column?: string | null;
        };
      };
      PulseRepos: {
        Row: {
          owner: string;
          name: string;
          hashed_name: string | null;
          full_name: string | null;
          full_hashed_name: string | null;
          id: number;
          github_id: number | null;
          is_public: boolean;
          last_polled: string | null;
        };
        Insert: {
          owner: string;
          name: string;
          hashed_name?: string | null;
          full_name?: string | null;
          full_hashed_name?: string | null;
          id?: number;
          github_id?: number | null;
          is_public?: boolean;
          last_polled?: string | null;
        };
        Update: {
          owner?: string;
          name?: string;
          hashed_name?: string | null;
          full_name?: string | null;
          full_hashed_name?: string | null;
          id?: number;
          github_id?: number | null;
          is_public?: boolean;
          last_polled?: string | null;
        };
      };
      RunErrors: {
        Row: {
          message: string | null;
          name: string | null;
          stack: string | null;
          id: number;
        };
        Insert: {
          message?: string | null;
          name?: string | null;
          stack?: string | null;
          id?: number;
        };
        Update: {
          message?: string | null;
          name?: string | null;
          stack?: string | null;
          id?: number;
        };
      };
      Runs: {
        Row: {
          action_id: number;
          error_id: number | null;
          attempt_id: number | null;
          pulse_repo_id: number | null;
          github_action: string | null;
          github_actor: string;
          github_ref: string | null;
          github_base_ref: string | null;
          github_head_ref: string | null;
          github_event_name: string;
          github_repository: string | null;
          github_run_id: number | null;
          github_action_repository: string | null;
          package_version: string | null;
          execution_time_s: number | null;
          execution_time_ns: number | null;
          ip: string | null;
          runner_name: string;
          runner_os: string;
          t: string;
          version: string | null;
          id: number;
        };
        Insert: {
          action_id: number;
          error_id?: number | null;
          attempt_id?: number | null;
          pulse_repo_id?: number | null;
          github_action?: string | null;
          github_actor: string;
          github_ref?: string | null;
          github_base_ref?: string | null;
          github_head_ref?: string | null;
          github_event_name: string;
          github_repository?: string | null;
          github_run_id?: number | null;
          github_action_repository?: string | null;
          package_version?: string | null;
          execution_time_s?: number | null;
          execution_time_ns?: number | null;
          ip?: string | null;
          runner_name: string;
          runner_os: string;
          t: string;
          version?: string | null;
          id?: number;
        };
        Update: {
          action_id?: number;
          error_id?: number | null;
          attempt_id?: number | null;
          pulse_repo_id?: number | null;
          github_action?: string | null;
          github_actor?: string;
          github_ref?: string | null;
          github_base_ref?: string | null;
          github_head_ref?: string | null;
          github_event_name?: string;
          github_repository?: string | null;
          github_run_id?: number | null;
          github_action_repository?: string | null;
          package_version?: string | null;
          execution_time_s?: number | null;
          execution_time_ns?: number | null;
          ip?: string | null;
          runner_name?: string;
          runner_os?: string;
          t?: string;
          version?: string | null;
          id?: number;
        };
      };
      UserPulseRepoAccesses: {
        Row: {
          user_id: string;
          pulse_repo_id: number;
          can_access: boolean;
          last_polled: string;
        };
        Insert: {
          user_id: string;
          pulse_repo_id: number;
          can_access?: boolean;
          last_polled?: string;
        };
        Update: {
          user_id?: string;
          pulse_repo_id?: number;
          can_access?: boolean;
          last_polled?: string;
        };
      };
      Users: {
        Row: {
          last_refresh: string;
          id: string;
          github_username: string;
          github_id: number;
          avatar_url: string | null;
        };
        Insert: {
          last_refresh?: string;
          id: string;
          github_username: string;
          github_id: number;
          avatar_url?: string | null;
        };
        Update: {
          last_refresh?: string;
          id?: string;
          github_username?: string;
          github_id?: number;
          avatar_url?: string | null;
        };
      };
      UtmParameters: {
        Row: {
          source: string | null;
          medium: string | null;
          campaign: string | null;
          term: string | null;
          content: string | null;
          id: number;
        };
        Insert: {
          source?: string | null;
          medium?: string | null;
          campaign?: string | null;
          term?: string | null;
          content?: string | null;
          id?: number;
        };
        Update: {
          source?: string | null;
          medium?: string | null;
          campaign?: string | null;
          term?: string | null;
          content?: string | null;
          id?: number;
        };
      };
    };
    Views: {
      contents_with_sources_view: {
        Row: {
          id: number | null;
          type_id: number | null;
          name: string | null;
          description: string | null;
          img_url: string | null;
          added_on: string | null;
          added_by: string | null;
          approved: boolean | null;
          approved_by: string | null;
          approved_on: string | null;
          release_date: string | null;
          ext_id: number | null;
          sources: Json | null;
          ruleset_count: number | null;
        };
      };
      PulseReposPublicInfo: {
        Row: {
          id: number | null;
          is_public: boolean | null;
          last_polled: string | null;
          owner: string | null;
          name: string | null;
          full_name: string | null;
        };
        Insert: {
          id?: number | null;
          is_public?: boolean | null;
          last_polled?: string | null;
          owner?: string | null;
          name?: never;
          full_name?: never;
        };
        Update: {
          id?: number | null;
          is_public?: boolean | null;
          last_polled?: string | null;
          owner?: string | null;
          name?: never;
          full_name?: never;
        };
      };
      ruleset_compound_view: {
        Row: {
          id: number | null;
          name: string | null;
          description: string | null;
          content_id: number | null;
          creator_id: string | null;
          creator_username: string | null;
          created_at: string | null;
          last_update_at: string | null;
          has_rulepoints: boolean | null;
          draft: boolean | null;
          deleted_at: string | null;
          views: number | null;
          rules: Json | null;
          sources: Json | null;
        };
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
