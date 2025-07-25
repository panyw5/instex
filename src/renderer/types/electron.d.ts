declare gl      // Drag and drop operations
      startDrag: (filePath: string) => void;
      prepareDragExport: (exportData: any) => Promise<{ success: boolean; filePath?: string; error?: string }>;
      cleanupDragFiles: () => Promise<{ success: boolean }>; {
  interface Window {
    electronAPI?: {
      // File operations
      openFile: () => Promise<any>;
      saveFile: (content: string, filePath?: string) => Promise<any>;
      saveFileAs: (content: string) => Promise<any>;
      saveBinaryFile: (data: string, defaultName: string) => Promise<{ success: boolean; path?: string; error?: string }>;
      exportFile: (exportData: { filename: string; data: string; format: string; encoding: string }) => Promise<{ success: boolean; filePath?: string; error?: string }>;
      
      // Drag & Drop operations
      startDrag: (latex: string, format: string, options: any) => Promise<{ success: boolean; filePath?: string; error?: string }>;
      prepareDragExport: (exportData: any) => Promise<{ success: boolean }>;
      cleanupDragFiles: () => Promise<{ success: boolean }>;
      onDragRequestExportData: (callback: (request: any) => void) => void;
      
      // Window operations
      minimizeWindow: () => Promise<void>;
      maximizeWindow: () => Promise<void>;
      closeWindow: () => Promise<void>;
      togglePin: () => Promise<boolean>;
      
      // App operations
      getAppVersion: () => Promise<string>;
      quitApp: () => Promise<void>;
      
      // Clipboard operations
      writeToClipboard: (text: string) => Promise<void>;
      readFromClipboard: () => Promise<string>;
      
      // Config operations
      saveConfig: (config: any) => Promise<any>;
      loadConfig: () => Promise<any>;
      
      // Menu operations
      onMenuAction: (callback: (action: string) => void) => void;
      removeMenuListeners: () => void;
      
      // Drag and drop operations
      startDrag: (dragData: { filename: string; content: string; filetype: string; renderType?: string; encoding?: string }) => void;
    };
  }
}

export {};
