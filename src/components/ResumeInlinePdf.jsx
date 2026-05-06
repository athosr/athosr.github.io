import { useCallback, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

function encodedPdfUrl(url) {
  try {
    return new URL(url, window.location.origin).href;
  } catch {
    return encodeURI(url);
  }
}

export default function ResumeInlinePdf({ fileUrl }) {
  const wrapRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(720);
  const [numPages, setNumPages] = useState(0);
  const [loadError, setLoadError] = useState(null);

  const measure = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const next = Math.min(Math.max(el.clientWidth, 240), 920);
    if (next > 0) setPageWidth(next);
  }, []);

  useEffect(() => {
    measure();
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <div ref={wrapRef} className="w-full">
      <div className="max-h-[min(85vh,56rem)] overflow-auto rounded-lg border border-slate-200/90 bg-slate-100/90 dark:border-slate-600/50 dark:bg-slate-900/50">
        {loadError ? (
          <div className="px-4 py-12 text-center text-sm text-red-600 dark:text-red-400">
            Could not load the preview. Use Open or Download below.
          </div>
        ) : null}
        <Document
          className="flex flex-col items-center gap-4 py-4"
          file={encodedPdfUrl(fileUrl)}
          onLoadSuccess={({ numPages: n }) => {
            setNumPages(n);
            setLoadError(null);
          }}
          onLoadError={() => setLoadError(new Error('load failed'))}
          loading={
            <div className="flex min-h-[28rem] items-center justify-center px-6 text-sm text-slate-500 dark:text-slate-400">
              Loading PDF…
            </div>
          }
        >
          {numPages > 0
            ? Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={i + 1}
                  pageNumber={i + 1}
                  width={pageWidth}
                  className="!bg-white shadow-lg"
                />
              ))
            : null}
        </Document>
      </div>
    </div>
  );
}
