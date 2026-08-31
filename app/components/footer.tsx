export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-6xl px-1 py-2 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center gap-6 text-center">
                    {/* Copyright */}
                    <div className="w-full border-t border-gray-100 pt-6">
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} Olfa Lafi. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}