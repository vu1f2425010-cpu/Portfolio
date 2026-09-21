import React, { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogData.json';
import './Blog.css';

/**
 * React Blog UI Mini-Project Section Component
 * 
 * Features:
 * - Loads sample blog posts from JSON data
 * - Real-time title/summary search bar using React useState hook
 * - Dynamic category filter buttons ("All", "React", "CSS", "JavaScript", "Backend")
 * - Efficient search + category filtering using React useMemo hook
 * - Renders posts with reusable BlogCard component
 * - Dynamic counter showing number of matching articles
 * - Empty state with quick reset button if no matches found
 */
const Blog = () => {
  // 1. React State: Search input query
  const [searchQuery, setSearchQuery] = useState('');

  // 2. React State: Selected category filter ('All' by default)
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract unique categories from blogData
  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogData.map((item) => item.category)));
    return ['All', ...unique];
  }, []);

  // 3. React Memoized Filter Logic (Combines Category Filter & Real-Time Search)
  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      // Category condition
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search condition (case-insensitive search across title, summary, and tags)
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Reset filters handler
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Mini-Project Showcase
          </span>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Articles & Blog</span>
          </h2>
          <p className="section-subtitle">
            Insights, architectural patterns, and practical guides on modern React, CSS layout systems, and full stack engineering.
          </p>
        </div>

        {/* Controls Bar: Search Input & Category Filter */}
        <div className="blog-controls-wrapper">
          {/* Real-time Search Input */}
          <div className="blog-search-box">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              id="blog-search-input"
              className="blog-search-input"
              placeholder="Search articles by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles by title in real-time"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dynamic Category Filter Buttons */}
          <div className="blog-category-filters" role="tablist" aria-label="Blog categories">
            {categories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`blog-filter-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                  {cat === 'All' ? (
                    <span className="filter-count">({blogData.length})</span>
                  ) : (
                    <span className="filter-count">
                      ({blogData.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="blog-status-bar">
          <span className="results-counter">
            Showing <strong>{filteredPosts.length}</strong> of {blogData.length} articles
            {selectedCategory !== 'All' && <span> in <em>{selectedCategory}</em></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              type="button"
              className="reset-filters-link"
              onClick={handleResetFilters}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="blog-grid" role="feed" aria-label="Blog articles list">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="blog-empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">No matching articles found</h3>
            <p className="empty-desc">
              We couldn't find any articles matching "{searchQuery}" in category "{selectedCategory}". Try checking for spelling or clear your filters.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResetFilters}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
